import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../store/reducers/userReducer'


function Users() {

  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch()
 
  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }
 
  return (
    <>
    <h1 className='px-3 py-2 bg-red-200 text-center '>Users list</h1>
    <div className='bg-red-100 flex flex-col items-center'>
      {users.map((e,index)=> {
        return <div key={index} className='px-3 py-2 bg-purple-400 rounded-md max-h-[200px] mb-2'>
        {e.name} <span onClick={()=> handleDelete(e.id)} className='px-2 py-1 bg-green-500 rounded-md ml-2 cursor-pointer '>delete</span>
        </div>
      })}
    </div>
    </>
  )
}

export default Users
