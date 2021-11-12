import React from 'react';

function Testing () {
    let cryptoData = {data: "bla", comments: [{content: "hello"},{content: "world"}, {content: "!!!"}]};
    let generateComs;
    let comments;
    
    if (cryptoData) {
        comments = cryptoData.comments[0] ? cryptoData.comments : null;
    } else {comments = null}
    // ^ Don't think you need to set comments to null
    
    // or
    comments = cryptoData ? cryptoData.comments : null;
    // can check cryptoData.comments, but wont your cryptoData return the comment key even if comments do not exist?
    
    if(comments) {
        generateComs = comments.map((comment) => {
            return (
                    <Card>
                            <Card.Content>
                            <Header> {comment.content} </Header>
                            <Button onClick={() => setCommentForm(!commentForm)} color='red'> Add Comment </Button>
                            <button className="ui button" onClick={() => setViewComments(!viewComments)}> Close Form </button>
                            </Card.Content>
                    </Card> 
            )})
    } else { generateComs =
            <Card>
                <CardContent>
                <Header> Add a comment..  </Header>
                    <Button onClick={() => setCommentForm(!commentForm)} color='red'> Add Comment </Button>
                    <button className="ui button" onClick={() => setViewComments(!viewComments)}> Close Form </button>
                </CardContent>
            </Card>
    }



    return (
        <div>
        { viewComments ? ([generateComs]): null}
        </div>                                
    )
}

export default Testing
