import FBBox from './FBBox'
import PostUserMeta from "./PostUserMeta"
import PostAttachment from "./PostAttachment"
import PostActions from './PostActions'

const Main = ({WallData}) => {
  return (
    <div className="col-7 Main">
      <FBBox Heading="Create a Post"></FBBox>
      {WallData.map((item, key) => (
        <FBBox key={key}>
          <PostUserMeta {...item.UserMeta}/>
          <p>{item.Text}</p>
           <PostAttachment item={item}/>
           <PostActions/>
          </FBBox>
      ))}
    </div>
  )
}

export default Main
