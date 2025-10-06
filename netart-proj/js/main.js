document.querySelector('#dark-girl').addEventListener('click', function() {
    document.querySelector('#in-dark').classList.remove('hidden');
    alert("He Talks to me all the time but ignored me today... He's only supposed to talk to me...");
});

document.querySelector('#in-dark').addEventListener('click', function() {
    document.querySelector('#obessive').classList.remove('hidden');
    alert("He's Mine and Only Mine...");
});

document.querySelector('#obessive').addEventListener('click', function() {
    document.querySelector('#parasocial').classList.remove('hidden');
    alert("We're Meant for Each Other!");
});

document.querySelector('#parasocial').addEventListener('click', function() {
    alert("Why is she Talking to Him?!");
});
