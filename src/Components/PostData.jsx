import React from 'react';
import { FaFile, FaTrash } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router';

const PostData = ({post,index,handleDelete}) => {
    const {title,roomType,location,contact,_id} = post;
    console.log(post);
    return (
        <>
           <tr>
            <td>{index+1}</td>
            <td>{title}</td>
            <td>{roomType}</td>
            <td>{location}</td>
            <td>{contact}</td>
            <td>
                <div className='flex gap-3'>
                    <button onClick={() => handleDelete(_id)} className=''>
                       <Link> 
                       <FaTrash size={20}></FaTrash>
                       </Link>
                    </button>
                    <button>
                        <Link>
                        <GrUpdate size={20}></GrUpdate>
                        </Link>
                    </button>
                </div>
            </td>
            </tr> 
        </>
    );
};

export default PostData;