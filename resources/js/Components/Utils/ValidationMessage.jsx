export default function InputError({ error }) {
    if (!error) return null;

    return <div className="text-red-400 text-xs mt-1">{error}</div>;
}
