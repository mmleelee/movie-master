import { HStack, Image, Text } from "native-base";
import React from "react";

const Star = ({star}) => {
    const cheese = <Image 
                        w={3} h={3} alt="cheese icon"
                        source={{uri: "https://github.com/hsiang2/movie_image/blob/main/ic_cheese.png?raw=true"}} 
                    />;
    const bomb = <Image 
                    w={3} h={3} alt="bomb icon"
                    source={{uri: "https://github.com/hsiang2/movie_image/blob/main/ic_bomb.png?raw=true"}}
                />;
    return(
        <HStack alignItems="center">
            {star >= 5 ? cheese: bomb}
            <Text fontSize={12} ml={1}>{star}</Text>
        </HStack>
    );
    
}

export default Star;