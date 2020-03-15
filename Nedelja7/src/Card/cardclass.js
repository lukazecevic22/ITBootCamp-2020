import React from 'react'
import DescpClass from './descpclass'
import EmojiClass from './emojiclass'


class CardClass extends React.Component{
    render(){
        return(
                <>
                <DescpClass description={this.props.description}></DescpClass>
                <EmojiClass url={this.props.url}></EmojiClass>
                </>
        )
    }
}

export default CardClass