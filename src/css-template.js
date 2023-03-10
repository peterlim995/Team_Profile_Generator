module.exports = () => {
 

    return `
    /*  Styling for team html */

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text);
  }

  a {
    text-decoration: none;
    color: #2168ff
  }


nav {
    background: #d63d3d;
    color: white;
    height: 120px;    
    display: flex;
    align-items: center;
    justify-content: center;
}

/* nav h1{
    margin: 0 auto;
} */
nav h1{
    font-size: 40px;
}


main {
    padding: 50px 200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.member{
    width: 200px;
    border: 1px solid gray;
    margin: 10px;
    box-shadow: 0 0px 15px #575757;;
    border-radius: 10px;
}

.title {
    background: #2d44d7;
    padding: 10px;    
    color: antiquewhite;
    border-radius: 10px 10px 0 0;
}

.title h1 {
    margin: 0 0 10px 0;
    font-size: 30px;
}

.title h2{
    margin: 0px;
    font-size: 20px;
}

.information {
    padding: 25px 15px;
    background-color: rgb(243, 236, 227);
    border-radius: 0 0 10px 10px;
}

.information p {
    background: #f6f6f7;
    padding: 9px;
    margin: 0;
    border: 1px solid gray;
    font-size: 12px;
}

    `;
};