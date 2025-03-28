
import { useGetUserQuery, useUpdateUserDataMutation } from '../../store/api/userApi'
import { IAddress, IUser } from '../../types/users.type'
import AddressBlock from './AddressBlock'

export const DashboardAddress = () => {

	const userId = document.location.pathname.split("/")[2]
	const { data: user, isSuccess, isLoading } = useGetUserQuery(userId)
	const [updateAddress] = useUpdateUserDataMutation()
	// var user = undefined
	// console.log(userId !== "not")
	// if (userId !== "not") {
	// 	user = useGetUserQuery(userId)
	// }
	const onDelete = (addressId: number) => {
		if (user) {
			const newUserData: IUser = {
				...user,
				addresses: user.addresses.filter(address => address.id !== addressId) as IAddress[],
			}
			updateAddress(newUserData)
		}
	}
	console.log(user)

  if (!user) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">You have not added any addresses yet.</span>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4">
          Add Address
        </button>
      </div>
    );
  }

  return (
    <div className='w-2/3'>
      <h2 className="text-xl font-bold mb-4">Address Book</h2>
      {user.addresses.map((address) => (
        <AddressBlock key={userId} address={address} onDelete={onDelete} />
      ))}
    </div>
  );
};