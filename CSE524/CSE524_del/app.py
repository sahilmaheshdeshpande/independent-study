from flask import Flask, render_template, request
# Import pandas 
import pandas as pd 
import os

app = Flask(__name__)
app._static_folder = os.path.abspath("templates/static/")

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/', methods=['POST'])
def getValue():
	global username
	global password
	global firstname
	global lastname
	username = request.form['username']
	password = request.form['password']

	password = int(password)

	# reading csv file  
	roster = pd.read_csv("templates/newRoster.csv") 

	if username in roster['Username'].values and password in roster['Student ID'].values:
		firstname = roster['First Name'][roster['Username'] == 'username'].to_string()
		lastname = roster['Last Name'][roster['Username'] == 'username'].to_string()
		# b = firstname.astype(str)
		return render_template('main.html', uname=username, pwd=password, fname=firstname, lname=lastname)
	else:	
		return render_template('error.html')

@app.route("/main")
def index_main():
    return render_template("main.html", uname=username, pwd=password, fname=firstname, lname=lastname)

@app.route("/Basic_operations/BO_index")
def BO_index():
    return render_template("/Basic_operations/BO_index.html")

@app.route("/arrays_operations/arrays_index")
def arrays_index():
    return render_template("/arrays_operations/arrays_index.html")

@app.route("/Classes_and_Objects/classes_index")
def classes_index():
    return render_template("/Classes_and_Objects/classes_index.html")

@app.route("/Dict_operations/Dict_index")
def Dict_index():
    return render_template("/Dict_operations/Dict_index.html")

@app.route("/DM_operations/DM_index")
def DM_index():
    return render_template("/DM_operations/DM_index.html")

@app.route("/func_operations/func_index")
def func_index():
    return render_template("/func_operations/func_index.html")

@app.route("/lambda_operations/lambda_index")
def lambda_index():
    return render_template("/lambda_operations/lambda_index.html")

@app.route("/List_operations/List_index")
def List_index():
    return render_template("/List_operations/List_index.html")

@app.route("/loops/loops_index")
def loops_index():
    return render_template("/loops/loops_index.html")

@app.route("/Sets_operations/sets_index")
def sets_index():
    return render_template("/Sets_operations/sets_index.html")

@app.route("/String_operations/SO_index")
def SO_index():
    return render_template("/String_operations/SO_index.html")

@app.route("/Tup_operations/Tup_index")
def Tup_index():
    return render_template("/Tup_operations/Tup_index.html")

@app.route("/main")
def main():
    return render_template("../../main.html")

if __name__ == "__main__":
	app.run(debug = True)