const Template = ({comic}) => {
//    const comic = props.data;
//    console.log(comic)
   
    return (
        <>

            <h5>{comic.comicName}</h5>
            <img src={comic.coverImage} alt="SwordKing" />
            <div className="containerContents">
                <div className="containerTitle"></div>
                <div className="contentsInfo">
                    <p>{comic.comicName}</p>
                    <p>{comic.genre}</p>
                </div>
            </div>
        </>
    )
} 

export default Template