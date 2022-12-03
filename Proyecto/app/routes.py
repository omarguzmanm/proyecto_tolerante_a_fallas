from flask import Flask, render_template, redirect, url_for, session, request
import requests


#Declarando nombre de la aplicación e inicializando, crear la aplicación Flask
app = Flask(__name__)
application = app


app.secret_key = '97110c78ae51a45af397be6534caef90ebb9b1dcb3380af008f90b23a5d1616bf19bc29098105da20fe'


#Redireccionando cuando la página no existe
@app.errorhandler(404)
def not_found(error):
    if 'conectado' in session:
        return redirect(url_for('home')), 404
    else:
        return render_template('public/modulo_login/index.html')
    
    
#Creando mi Decorador para el Home
@app.route('/')
def inicio():
    return render_template('public/dashboard/home.html')
    
@app.route('/inicio', methods=['GET','POST'])
def home():
    if request.method == 'GET':
        return render_template('public/dashboard/pages/Dashboard.html')
    if request.form['search']:
        url= "https://api.giphy.com/v1/gifs/search?api_key=rGgmZSIYd6EvztznZGnv66seXlpwAItb&limit=12&q=" + request.form['search']
        giphy = requests.get(url)
        dataGiphy = giphy.json()
        # print(dataGiphy)
        return render_template('public/dashboard/pages/Dashboard.html', data=dataGiphy['data'])
    else:
        return render_template('public/dashboard/pages/Dashboard.html') 
  

@app.route('/dog', methods=["GET", "POST"])
def index():
    if request.method == 'GET':
        url = "https://dog.ceo/api/breeds/image/random"
    
    if request.method == 'POST':
        name = request.form['name']
        url = "https://dog.ceo/api/breed/{}/images/random".format(name)
   
    resultado = requests.get(url)
    datos = resultado.json()
    imagen = datos["message"]

    return render_template("public/dashboard/pages/dog.html", imagen=imagen)

@app.route('/marvel')
def marvel():
    return render_template('public/dashboard/pages/marvel.html')
        
@app.route('/pokemon')
def pokemon():
    return render_template('public/dashboard/pages/error.html')    



