#Importando  flask y algunos paquetes
from flask import Flask, render_template, request, redirect, url_for, session

from routes import * 

import re
        
if __name__ == "__main__":
    app.run(debug=True, port=8000)
    
    
