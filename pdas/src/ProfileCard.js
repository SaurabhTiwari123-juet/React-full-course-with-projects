function ProfileCard({title,handle})
{

 // const {title,handle} =props;// same as  const title =props.title;
  // const handle =props.handle;
 
  return (<div>
   <div>
   Title is {title}
  </div>
    <div>
   handle is {handle}
  </div>
  </div>);

}


export default ProfileCard;
  