const fs = require('fs');
const path = require('path');

fs.mkdir('./1800', err => {
    if (err) {
        console.log(err);
    }
});

fs.writeFile('./1800/Ivan.txt',
    ('Hello my name is Ivan 18:00'), err => {
    if (err) {
        console.log(err);
    }
});

fs.writeFile('./1800/Mykola.txt',
    ('Hello my name is Mykola 18:00'), err => {
    if (err) {
        console.log(err);
    }
});

fs.mkdir('./2000', err => {
    if (err) {
        console.log(err);
    }
});

fs.writeFile('./2000/Dima.txt',
    ('Hello my name is Dima 20:00'), err => {
    if (err) {
        console.log(err);
    }
});

fs.writeFile('./2000/Olga.txt',
    ('Hello my name is Olga 20:00'), err => {
    if (err) {
        console.log(err);
    }
});

// test test test
//
// fs.rename(path.join(process.cwd(), '1800' , 'Mykola.txt' ),
//     path.join(process.cwd() , '2000' , 'Mykola.txt'), err => {
//     if (err) {
//         console.log(err);
//     }
// });
//
//
// fs.rename(path.join(process.cwd(), '2000' , 'Dima.txt' ),
//     path.join(process.cwd() , '1800' , 'Dima.txt'), err => {
//         if (err) {
//             console.log(err);
//         }
//     });
//
//
//
// fs.rename(path.join(process.cwd(), '2000' , 'Olga.txt' ),
//     path.join(process.cwd() , '1800' , 'Olga.txt'), err => {
//         if (err) {
//             console.log(err);
//         }
//     });
//
//
// fs.rename(path.join(process.cwd(), '1800' , 'Ivan.txt' ),
//     path.join(process.cwd() , '2000' , 'Ivan.txt'), err => {
//         if (err) {
//             console.log(err);
//         }
//     });
// test
//
// const dirPath = resolve(__dirname, '2000');
//
// const files = readdirSync(dirPath);
//
// files.forEach(file => rename(
//     dirPath + `/${file}`,
//     dirPath + `/${file.toLowerCase()}`,
//     err => console.log(err)
// ));
// test
// const imageDirPath = resolve(__dirname, '1800');
// const files = fs.readdirSync(imageDirPath);
// files.forEach(file => fs.rename(
//     imageDirPath + `/${file}`,
//     imageDirPath + `/${file.toLowerCase()}`,
//     err => console.log(err)
// ));

const SixHour = path.join(process.cwd() , '1800');
const EightHour  = path.join(process.cwd(), '2000')

const RenameFiles = (six, eight) =>  {
    fs.readdir(six, (err, data) => {
        if (err) {
            console.log(err);
        }
        const firstList = data;
        fs.readdir(eight, (err1, data1) => {
            if (err1){
                console.log(err1);
            }
            const secondList = data1;
            for (const firstItem of firstList) {
                fs.renameSync(path.join(six, firstItem),
                    path.join(eight, firstItem), err2 => {
                    if (err2) {
                        console.log(err2);
                    }
                })
            }
            for (const secondItem of secondList) {
                fs.renameSync(path.join(eight, secondItem),
                    path.join(six, secondItem), err3 => {
                    console.log(err3);
                })
            }
        })
    })
}
RenameFiles(SixHour,EightHour);
