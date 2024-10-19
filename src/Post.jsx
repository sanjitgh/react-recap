import './Post.css'
export default function Post({post}){
    const{userId, id, title, body} = post;
    return(
        <div className='box'>
            <h5>Title: {title}</h5>
            <p><small>User Id: {userId}</small></p>
            <p><small>Id: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}