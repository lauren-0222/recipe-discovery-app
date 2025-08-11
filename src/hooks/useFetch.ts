import { useEffect, useState } from "react";

export function useFetch<T = any>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(!!url);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;
    const ctrl = new AbortController();
    setLoading(true); setError(null);
    fetch(url, { signal: ctrl.signal })
      .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
      .then(setData)
      .catch(e => { if (e.name !== "AbortError") setError(String(e)); })
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [url]);

  return { data, loading, error };
}