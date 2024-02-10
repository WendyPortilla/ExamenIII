import { StyleSheet } from "react-native"; 
 
export const styles=StyleSheet.create({ 
    avatar:{ 
        width:550, 
        height:550, 
        borderRadius:100, 
    },avatarcontainer:{ 
        alignItems:'center', 
    }, 
    bienvenidos:{ 
        textAlign:'center', 
        color:'blue', 
        fontSize:15 
    },container: { 
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        backgroundColor: '#f0f0f0', 
        padding: 10, 
      }, 
      item: { 
        width: '48%', // Ocupa el 48% del ancho de la pantalla 
        aspectRatio: 1, // Hace que la caja sea cuadrada 
        backgroundColor: '#3498db', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        marginVertical: 10, 
      }, 
      text: { 
        color: '#fff', 
        fontSize: 18, 
      } 
})