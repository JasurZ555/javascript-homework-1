// // 1.
// const user = {
//   username: "admin",
//   password: "12345"
// };

// function login(user, username, password){
//     let result =""
//     if (username === user.username && password === user.password){
//         result = "Login successful"
//     }else{
//         result = "Invalid username or password"
//     }
//     return result
// }
// console.log(login(user,"admin", "12345"))

// 2.
// const account = {
//   owner: "Ali",
//   balance: 500
// };
// let userBalance = account.balance

// function withdraw(account, amount){
//     let result = ""
//     if (amount <= userBalance){
//         userBalance -= amount
//         result = userBalance
//     }else{
//         result = "Insufficient balance"
//     }
//     return result
// }

// console.log(withdraw(account,400))
// console.log(withdraw(account,400))

// 3.
// const employee = {
//   name: "Vali",
//   salary: 500,
//   experience: 3
// };

// function calculateSalary(employee){
//     if (employee.experience >= 3){
//         return employee.salary += employee.salary*0.2
//     }else{
//         return employee.salary
//     }
// }

// console.log(calculateSalary(employee))