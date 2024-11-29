function showStack(stackType) {
    // Esconde todas as stacks
    document.getElementById('backend').style.display = 'none';
    document.getElementById('frontend').style.display = 'none';

    document.getElementById(stackType).style.display = 'block';
}