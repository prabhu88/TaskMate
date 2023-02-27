import React from 'react'
import CardWithThubnail from '../components/cards/cardThumbnail'
import CardFuturePosts from '../components/cards/cardFuturePosts'
import StickyBar from '../components/navbars/stickyBar'
const Dashboard = () =>{
    const postsData = [{},{}]
    return(
        <>
            {/* <CardFuturePosts /> */}
            {/* <CardWithThubnail posts={postsData} /> */}
            <div class="row g-5">
                <div class="col-md-8">
                
                </div>
                <div class="col-md-4">
                    <StickyBar />
                </div>
            </div>
        </>
    )
}
export default Dashboard