#include "classif.h"
#include "DHT.h"
#define DHTPIN 5
#define DHTTYPE DHT11
float param[5];
DHT dht(DHTPIN, DHTTYPE);
Eloquent::ML::Port::DecisionTree classif;
byte prediction;
void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  delay(2000);
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature(); 
    if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  //mean:[23.51272374  4.3778105  64.08468493  0.58355023  0.5938242   2.46313014]
  //std:[ 6.06728707  9.85710259 22.05998469  0.2167735   0.18515084  0.9285951 ]
  param[0]=(temperature-23.51272374)/6.06728707;//to make it align with standardscaler
  param[1]=(5-4.3778105)/9.85710259; //make shift value since we don't have any precipitation sensor yet
  param[2]=(humidity-64)/22.05998469;
  param[3]=(0.25-0.58355023)/0.2167735; //also makeshift values
  param[4]=(0.25-2.46313014)/0.9285951;
  prediction=classif.predict(param);
  Serial.print("Prediction: ");
  Serial.println(prediction); 
}
