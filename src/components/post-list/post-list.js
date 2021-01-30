import React from 'react';
import {ListGroup} from 'reactstrap'
import './post-list.css';
import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id} = item;
      return(
          <li className="list-group-item" key={item.id}>
           <PostListItem
            label={item.label}
            important={item.important}
            onDelete = {() => onDelete(id)}
           onToggleImportant={ () => onToggleImportant(id)}
           onToggleLiked={ () => onToggleLiked(id)}/>
        </li>
      )
    })
    return (
        <ListGroup className="app-list"> //flexible component for displaying and modify of content
            {elements}
        </ListGroup>
    )
}
export default PostList;