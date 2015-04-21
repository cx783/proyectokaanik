#pragma strict

var cameraAyuda: GameObject;
var cameraMain: GameObject;
	
function irMenuAprender () {
	Application.LoadLevel("MenuAprender");
}
	
function irMenuJugar () {
	Application.LoadLevel("MenuJugar");
}
	
function irAyuda () {
	cameraAyuda.SetActive(true);
	cameraMain.SetActive(false); 
}
	
function salir () {
	Application.Quit();
}
