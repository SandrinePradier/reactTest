import React, { Component } from 'react';
//we import the compnent object in order to use it as class
import ReactDom from 'react-dom'; //no path as it is understood that it is in node module
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //no need to write the extension of the file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCFn7EftH5wbb9E4_ft9jaed_drQBNJhyk';



//create a new component
//this component should produce some html
//below the component name is a class. 
// const App = function(){
// 	return <div>hello!</div>
// }

// can also be written in ES6:
//here is a functional component
// const App = () => {
// 	return (
// 		<div><SearchBar /></div>
// 		);
// 	//we can wrap the return in parenthesis
// }

//we need to instanciate the component before rendering 
//it to the DOM
// the instanciation is <App></App>
//we can also note it <App /> because there is nothing in between our tags

//take this component's generated HTML and put it
//on the page ( in the DOM).
// if we do : 
// ReactDom.render(<App />);
//React think : i am trying to render this, but i don't know were i have to render it to
//=> We add a second parameter, an existing HTML node, the top level div with class container
//it is the root node of the entire application
// ReactDom.render(<App />, document.querySelector('.container'));


class App extends Component {
	constructor(props){
		super(props);

		//the list of videos on state sets starts as an empty array
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('louane')
		//when the component is rendered, it kill kicks off the search, 
		//and the search will update the value of videos
	}

	videoSearch(term){
		YTSearch({key:API_KEY, term: term}, (data)=>{
			//NB data here is naming, we could have replace it by result, or videos
			// and in this case write this.setState({videos})
			console.log(data);
			this.setState({ 
				videos:data,
				selectedVideo:data[0]
				 });
		});
	}
//App parent component to VideoList child component.
// needs to pass data, we do this with props video.
//we will inject props as an argument in the VideoList component because it is functional comp.
//if the child comp is a Class based component, props are available in the component
//with this.props.....
//props is an object, and one of its property will be videos

	render(){
		return (
			<div>
				<SearchBar 
					onSearchTermChange={ term => this.videoSearch(term)}
				/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	}

}



ReactDom.render(<App />, document.querySelector('.container'));
