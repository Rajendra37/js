var quotes=[
    ' The purpose of our lives is to be happy. — Dalai Lama.',
    ' Life is what happens when youre busy making other plans. — John Lennon.',
    'Get busy living or get busy dying.— Stephen King.',
    'You only live once, but if you do it right, once is enough.— Mae West.',
  
]
function newQuote()
{
    var radomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[radomNumber];
}