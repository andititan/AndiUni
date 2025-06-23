export function UserButtons({ onCreate, onRemove }) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={onCreate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create User
      </button>
      <button
        onClick={onRemove}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Remove User
      </button>
    </div>
  );
} 