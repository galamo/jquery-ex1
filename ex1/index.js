"use strict";

$(function () {
    console.log($("#data-container"));
    const mainScreen = $("#data-container");


    $("#mc").click(function () {

        mainScreen.html(getMaccabiData());
    })

    $("#hp").click(function () {
        mainScreen.html(getHapoelData());

    })


})

function getMaccabiData() {
    // const data = "<p><b>מכבי תל אביב</b> הוא <a href='/wiki/%D7%9E%D7%95%D7%A2%D7%93%D7%95%D7%9F_%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C'";


    const data = `  <p><b>מכבי תל אביב</b> הוא <a href='/wiki/%D7%9E%D7%95%D7%A2%D7%93%D7%95%D7%9F_%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C'
    class='mw-redirect' title='מועדון כדורגל'>מועדון כדורגל</a> <a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C_%D7%91%D7%99%D7%A9%D7%A8%D7%90%D7%9C'
    title='כדורגל בישראל'>ישראלי</a> מהעיר <a href='/wiki/%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95'
    title='תל אביב-יפו'>תל אביב</a>, הנמנה עם מועדוני ה<a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C'
    title='כדורגל'>כדורגל</a> הוותיקים והמובילים ב<a href='/wiki/%D7%99%D7%A9%D7%A8%D7%90%D7%9C' title='ישראל'>ישראל</a>
ומשחק ב<a href='/wiki/%D7%9C%D7%99%D7%92%D7%AA_%D7%94%D7%A2%D7%9C_%D7%91%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C'
    title='ליגת העל בכדורגל'>ליגת העל</a>. המועדון הוקם בשנת <a href='/wiki/1906' title='1906'>1906</a>,
ומאז <a href='/wiki/2009' title='2009'>2009</a> הוא בבעלות המיליארדר היהודי-קנדי, <a href='/wiki/%D7%9E%D7%99%D7%98%D7%A9%D7%9C_%D7%92%D7%95%D7%9C%D7%93%D7%94%D7%90%D7%A8'
    title='מיטשל גולדהאר'>מיטשל גולדהאר</a>. המועדון חבר מן המניין ב<a href='/wiki/%D7%90%D7%A8%D7%92%D7%95%D7%9F_%D7%94%D7%9E%D7%95%D7%A2%D7%93%D7%95%D7%A0%D7%99%D7%9D_%D7%94%D7%90%D7%99%D7%A8%D7%95%D7%A4%D7%99%D7%99%D7%9D'
    title='ארגון המועדונים האירופיים'>ארגון המועדונים האירופיים</a>.
</p>
`;

    return data;
}


function getHapoelData() {
    const data = "<p><b>הפועל תל אביב</b> היא אגודת <a href='/wiki/%D7%A1%D7%A4%D7%95%D7%A8%D7%98_%D7%91%D7%99%D7%A9%D7%A8%D7%90%D7%9C' title='ספורט בישראל'>ספורט</a> <a href='/wiki/%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95' title='תל אביב-יפו'>תל אביבית</a> המשתייכת ל<a href='/wiki/%D7%94%D7%A4%D7%95%D7%A2%D7%9C' title='הפועל'>תנועת הפועל</a>, אשר נוסדה ב-<a href='/wiki/1923' title='1923'>1923</a>, והיא בין המובילות בישראל מבחינת ענפי ה<a href='/wiki/%D7%A1%D7%A4%D7%95%D7%A8%D7%98' title='ספורט'>ספורט</a> המיוצגים בה. ענפי הספורט המובילים באגודה הם <a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C' title='כדורגל'>כדורגל</a>, <a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%A1%D7%9C' title='כדורסל'>כדורסל</a>, <a href='/wiki/%D7%98%D7%A0%D7%99%D7%A1' title='טניס'>טניס</a>, <a href='/wiki/%D7%94%D7%AA%D7%A2%D7%9E%D7%9C%D7%95%D7%AA' title='התעמלות'>התעמלות</a>, <a href='/wiki/%D7%A9%D7%99%D7%98_%D7%AA%D7%97%D7%A8%D7%95%D7%AA%D7%99' title='שיט תחרותי'>שיט</a> ו<a href='/wiki/%D7%A7%D7%90%D7%A0%D7%95/%D7%A7%D7%99%D7%90%D7%A7' title='קאנו/קיאק'>קיאקים אולימפיים</a>, ומועדון ה<a href='/wiki/%D7%90%D7%AA%D7%9C%D7%98%D7%99%D7%A7%D7%94' title='אתלטיקה'>אתלטיקה</a> של האגודה הצמיח <a href='/wiki/%D7%A1%D7%A4%D7%95%D7%A8%D7%98%D7%90%D7%99' title='ספורטאי'>ספורטאים</a> בולטים רבים. בעבר היו במועדון גם קבוצות <a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%99%D7%93' title='כדוריד'>כדוריד</a>, <a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%A2%D7%A3' title='כדורעף'>כדורעף</a>, <a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%A1%D7%9C_%D7%A0%D7%A9%D7%99%D7%9D' title='כדורסל נשים'>כדורסל נשים</a> ו<a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C_%D7%A0%D7%A9%D7%99%D7%9D' title='כדורגל נשים'>כדורגל נשים</a>, ועד לסוף <a href='/wiki/%D7%A9%D7%A0%D7%95%D7%AA_%D7%94-60_%D7%A9%D7%9C_%D7%94%D7%9E%D7%90%D7%94_%D7%94-20' title='שנות ה-60 של המאה ה-20'>שנות ה-60</a> הייתה גם קבוצת ה<a href='/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%9E%D7%99%D7%9D' title='כדורמים'>כדורמים</a> של המועדון מהמובילות בישראל.</p>";
    return data;
}