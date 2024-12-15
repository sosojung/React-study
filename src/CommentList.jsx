import Comment from './Comment'
import comments from './comments'

function CommentList() {
    return (
        <div>
            {
                comments.map(
                    function(comment){
                        return (
                            <Comment name = {comment.name} content = {comment.comment}/>
                        )
                    }
                    )
            }
        </div>
    )
}
export default CommentList;