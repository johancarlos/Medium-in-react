import React, {Component} from "react";
import axios from 'axios'
import Story from "./Story"

const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/nearshore-code`

class StoryPage extends Component {
  state ={
    stories: []
  }
  constructor() {
    super()
    this.getStory()
  }
  getStory =()=>{
    axios.get(url).then((response)=>{
      const stories = response.data.items
      this.setState({stories: stories})
    });
  }
  render(){
    return(
      <div>
        {this.state.stories?(
          <div>
              {this.state.stories.map(currentStory=>(
                <Story story={currentStory}>
                </Story>
              ))}
          </div>
        ) : "No Story found" }
      </div>
    );
  }
}
export default StoryPage;
