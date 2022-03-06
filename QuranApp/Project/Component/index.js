import React from 'react';
import { StyleSheet,View,Text} from 'react-native';



const Skill = ({title,}) => {
  
  
    
  

    return(
        
        <View style={styles.skill}>
        <View style={styles.category}>
          <Text style={styles.judulSkill}>{title}</Text>
        </View>
        
      </View>
   
    )
}

  

export default Skill;

const styles = StyleSheet.create({
  category: {
    margin: 12,

    padding: 12,
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 50,
  },
  judulSkill: {
    color: "white",
    fontSize:12,
    fontFamily:"Montserrat_600SemiBold"
  },
  

 
})
