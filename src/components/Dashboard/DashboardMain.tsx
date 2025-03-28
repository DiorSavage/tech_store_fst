import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/UserAccount.module.scss';
import { useGetUserQuery } from '../../store/api/userApi';
import { MainBlock } from './MainBlock';
import { blocks } from '../../constants/useraccount.constants';

export const DashboardMain = () => {

  const { id } = useParams()
  const { data: user, isLoading, isSuccess } = useGetUserQuery(id as string)
  console.log(id)
  const blocksInfo = [
    [
      <><p>{user && user.firstname} {user && user.surname}</p> <p>{user && user.email}</p></>,
      <><p>You don't subscribe to our newsletter.</p></>
    ],
    [
      user?.addresses.length === 0 ? <><p>You have not set a default billing address.</p></> : <div className='grid grid-cols-5 gap-3'>{user?.addresses.map(address => <Link to={`/user/${user.id}/address`} className='transition-all duration-300 hover:scale-[1.01] border rounded-md shadow-md text-main_blue flex flex-col px-3 py-2'><span className='text-xl'>{address.name} </span><span className='text-base'>{address.city} - {address.street} - {address.housenumber} </span></Link>)}</div>,
    ]
  ]

  return(
    <div className={styles.dashboard__main}>
      {isLoading ? (<div>Loading</div>) : isSuccess ? blocks.map((block, i) => {
        return <MainBlock 
          key={i}
          headerBlock={block.headerBlock}
          headersInfoBlock={block.headersInfoBlock}
          info={blocksInfo[i]}
          namesEdit={block.namesEdit}
          paths={block.paths}
          secondLinks={block.secondLinks}
          headerLink={block.headerLink}
        />
      }) : (<div>Not Found</div>)}
    </div>
  );
};
