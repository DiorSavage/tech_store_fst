const AddressCard = ({ address, onDelete }: { address: { city: string; street: string; housenumber: number; name: "Main" | "Additional"; id: number }; onDelete: (addressId: number) => void }) => {
  return (
    <div className="bg-white rounded-lg w-full shadow-md p-4 mb-4">
      <div className="grid grid-cols-3 justify-between items-center">
        <div className='flex'>
          <strong className="text-lg font-semibold">{address.name}</strong>
        </div>
				<div className='flex flex-col gap-y-1'>
					<p className='text-gray-900'>{address.city}</p>
					<p className='text-gray-600'>{address.street} {address.housenumber}</p>
				</div>
        <button
          className="bg-red-500 hover:bg-red-700 w-1/2 ml-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={() => onDelete(address.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressCard;