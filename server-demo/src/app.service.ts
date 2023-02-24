import { Injectable } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { User } from './models/user.model';

@Injectable()
export class AppService {

  userList = [
    {
      id: '1',
      name: 'Chuyen',
      email: 'phamichchuyen@gmail.com',
      password: 'chuyen123'
    },

    {
      id: '2',
      name: 'Trung',
      email: 'nguyentantrung@gmail.com',
      password: 'trung123',
    },

    {
      id: '3',
      name: 'Giang',
      email: 'nguyentruonggiang@gmail.com',
      password: 'giang123',
    },

    {
      id: '4',
      name: 'Son',
      email: 'dinhtrungson@gmail.com',
      password: 'son123',
    },

    {
      id: '5',
      name: 'Dung',
      email: 'dung@gmail.com',
      password: 'dung123',
    },
  ]
  getHello() {
    console.log('haha')
  }
  addUser(user: User) {
    this.userList.push(user);
    console.log(this.userList);
  }

  DeleteUser(user: User) {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id === user.id) {
        this.userList.splice(i, 1);
      }                                                                                                
    }
    console.log(this.userList)
  }

  UpdateUser(user: User) {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id === user.id) {
        this.userList[i] = user;
      }
    }
    console.log(this.userList)
  }

  GetUser(){
    return this.userList
  }

  GetUserbyID(id: string){
    return this.userList.find(user => user.id == id);
  }

}
