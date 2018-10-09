import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
	//const videoSelect = props.onVideoSelect;
	// const videosList = props.videos;
	// console.log('from VideoList:', videosList);
	const videoItems = props.videos.map((onevideoItem) => {
		return (
			<VideoListItem 
				key={onevideoItem.etag}
				video={onevideoItem}
				onVideoSelect={props.onVideoSelect}
			/>
		//the key is good to track each item in the list.
		//it is a good practice to always add key in a list
		);
	})
	return (
		//to add a class, we cannot confuse with class, we use className
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
		);
}

export default VideoList;