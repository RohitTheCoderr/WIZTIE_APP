import React from 'react'
import { Button } from '../form'
import { Link } from 'react-router-dom'
import { useGetShow } from '@/services/zustandStore';

function UploadProjectBtn() {

  return (
    <div className='w-[70%] m-auto flex justify-center'>
        {/* <Button type={"button"} onclick={showUploadForm()} name={"Upload Project"} style={"w-full px-40"}/> */}
        <Link to={"/useraccount/dataform"}><Button type={"button"} name={"Upload Project"} style={"w-full px-40"}/></Link>
    </div>
  )
}

export default UploadProjectBtn