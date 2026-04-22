export default function Button({ action }) {
  return (
    <button className="bg-teal-500 rounded-lg shadow-md px-5 py-2 text-white">
      {action}
    </button>
  );
}
