from flask import Flask, render_template, request, redirect


app = Flask(__name__)


@app.route('/')
def main():
    return render_template('main.html')


@app.route('/presentation')
def presentation():
    return render_template('presentation.html')


if __name__ == '__main__':
    app.run(debug=True)