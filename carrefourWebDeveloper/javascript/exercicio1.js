function getAdmins(map) {
    let admins =[];

    for([key, value] of map)
    {
        if(value === 'Admin')
        {
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Luan', 'User');
usuarios.set('Guilherme', 'Admin');
usuarios.set('Gabriel', 'User');
usuarios.set('Matheus', 'User');
usuarios.set('Beatriz', 'User');
usuarios.set('Caroline', 'Admin');
usuarios.set('Ana', 'User');

console.log(getAdmins(usuarios));