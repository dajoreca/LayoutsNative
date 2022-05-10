import react from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

const App = () => {
  return (
    <>
      <ScrollView>

          <View style={{ flexDirection: 'row'}}>
            <Image 
                style={styles.banner}
                source={ require('./assets/img/bg.jpg')}
            />
          </View>

          <View style={styles.contenedor}>
            <Text style= {styles.titulo}>Que Hacer en Paris</Text>
            <ScrollView
            horizontal
            >
                <View>
                    <Image
                      style={styles.ciudad}
                      source={ require('./assets/img/actividad1.jpg')}
                    />
                </View>
                <View>
                    <Image
                      style={styles.ciudad}
                      source={ require('./assets/img/actividad2.jpg')}
                    />
                </View>
                <View>
                    <Image
                      style={styles.ciudad}
                      source={ require('./assets/img/actividad3.jpg')}
                    />
                </View>
                <View>
                    <Image
                      style={styles.ciudad}
                      source={ require('./assets/img/actividad4.jpg')}
                    />
                </View>
                <View>
                    <Image
                      style={styles.ciudad}
                      source={ require('./assets/img/actividad5.jpg')}
                    />
                </View>
            </ScrollView>

            <Text style= {styles.titulo}>Los Mejores Alojamientos</Text>
            <View>
                <View>
                    <Image
                        style={styles.mejoresDestinos}
                        source={ require('./assets/img/mejores1.jpg')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.mejoresDestinos}
                        source={ require('./assets/img/mejores2.jpg')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.mejoresDestinos}
                        source={ require('./assets/img/mejores3.jpg')}
                    />
                </View>
            </View>

          </View>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor:{
    marginHorizontal: 10,
  },
  ciudad:{
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejoresDestinos:{
    width: '100%',
    height: 200,
    marginVertical: 5,
  },

});

export default App;






//const App = () => {
  //return (
    //<>
      //<View style={styles.contenedor}>
          //<View style={styles.caja1}></View>
          //<View style={styles.caja2}></View>
          //<View style={styles.caja3}></View>
          //<View style={styles.caja4}></View>
      //</View>
    //</>
  //);
//};

//const styles = StyleSheet.create ({
  //contenedor:{
    //backgroundColor: 'cornflowerblue',
    //flex:1,
    //// flexDirection: 'column'          //de arriba hacia abajo (default)
    //flexDirection: 'row',             //de izquierda a derecha
    //// flexDirection: 'column-reverse'  //de abajo hacia arriba
    //// flexDirection: 'row-reverse'     //de derecha a izquierda
    ////justifyContent: 'flex-end',       //desplaza a la derecha o final
    ////justifyContent: 'flex-start',     //desplaza a la izquierda o inicio
    ////justifyContent: 'center',         //desplaza al centro
    ////justifyContent: 'space-between',  //distribuye a lo largo de la pantalla intercalados con el fondo, empezando en este ejemplo con el primer color
    ////justifyContent: 'space-evenly',   // distribuye a lo largo de la pantalla intercalados con el fondo, empezando en ese ejemplo con el color de fondo
    //justifyContent: 'space-around',    //distribuye a lo largo de la pantalla intercalados con el fondo, empezando en ese ejemplo con el color de fondo, pero dando separacion desigual
    ////alignItems: 'flex-start',           //"corta" el tamaño de las columnas, desde el inicio
    ////alignItems: 'flex-end',             //"corta" el tamaño de las columnas, desde el final
    ////alignItems: 'center',             //"corta" el tamaño de las columnas y las posiciona en el centro
    ////alignItems: 'baseline',             //"corta" el tamaño de las columnas, desde el inicio
    //alignItems: 'stretch',             //posiciona las columnas desde el inicio al final(no cambios aparentes) (es el default)


  //},
  //caja1:{
    //padding: 20,
    //backgroundColor:'navy',

  //},
  //caja2:{
    //padding: 20,
    //backgroundColor:'yellow',

  //},
  //caja3:{
    //padding: 20,
    //backgroundColor:'green',

  //},
  //caja4:{
    //padding: 20,
    //backgroundColor:'teal',

  //},
//});

//export default App;