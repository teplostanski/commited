import React from "react";

const PostItem = (props) => {
  //props это объект
  console.log(props); 
  //Object { post: {…} }
  //post: Object { id: 1, title: "Javascript", body: "Description" }
  //<prototype>: Object { … }
  return (
    <div className="post__content">
      <strong>{props.post.id}. {props.post.title}</strong>
      <div>
      {props.post.body}
      </div>
      <div>
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem;