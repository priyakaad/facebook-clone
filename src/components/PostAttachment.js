const PostAttachment = ({item}) => {
    return (
         
        item.Attachment && (<>
            {item.Type === "Picture" && (
              <img src={item.Attachment} alt={item.Text} />
            )}
            {item.Type === "Video" && (
              <div className="embed-container">
                <iframe 
                src={
                  "https://www.youtube.com/embed/" + 
                  item.Attachment.replace("https://youtu.be/", "") + 
                  "hOt1Fq5I3xM"
            } 
            title={item.Text}
            frameBorder="0" allowFullScreen></iframe></div>
            
              )} 
              </>)
    );
};

export default PostAttachment;

