// 1) "  Çağatay Yıldız" isimli metindeki boşlukları kaldır.    (REPLACE)
// 2) "cagatay yildiz" kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)
// 3) "******Çağatay Yıldız" isimli metindeki yıldızları kaldır (REPLACE)
// 4) "Çağatay  Yıldız" metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)
// 5) "**Tech Career**" isimli metindeki yıldızları kaldır (REPLACE)
// 6) "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy. "***Tech Career***" ( Normal toplama operatörü)
// 7) "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült (SUBSTRING)
// 8) "Tech bilişim" kelimelerin ilk harflerini büyült (Substring ve upper)



console.log("  Çağatay Yıldız".replaceAll(" ",""));

console.log("cagatay yildiz".replaceAll(" ","").toUpperCase());

console.log("******Çağatay Yıldız".replaceAll("*",""));

console.log("Çağatay  Yıldız".replaceAll(" "," "));

console.log("**Tech Career**".replaceAll("*",""));

console.log("***"+"Tech Career"+ "***");

console.log("Tech Career Bilişim teknolojileri".substring(19).toUpperCase());

console.log("Tech bilişim".substring(4, 6).toUpperCase());










// "Tech Career" metnini tersten yazdır

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki SADECE poizitif sayıların toplamını ekrana yaz

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki en büyük sayı hangisidir?

// 1-50 arası sayılar içinde 3’e veya 5’e tam bölünebilen sayıları console a yaz ve kaç adet olduğunu console yaz.




console.log("Tech Career".split("").reverse().join(""));

const numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11]

console.log(numbers.filter(a => a > 0));

numbers.sort((a, b) => b - a )[0]
console.log(numbers.sort((a, b) => b - a )[0]);

function divisible (){
    let result = 0
    for(let i = 0; i < 50; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i)
            result++
        }
    }
    return result;
}
console.log(divisible());


