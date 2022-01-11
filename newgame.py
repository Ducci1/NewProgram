import time
import random

def main():
   validinput=True
   while validinput:     
            try:
                bot=random.randint(1,3)
                user=input("rock, paper or scissors?")
                print("you pick " + user)
                if bot==1:
                    print("computer picks rock")
                elif bot==2:
                    print("computer picks paper")
                elif bot==3:
                    print("computer picks scissors")
               
            except:
                validinput=False


          
            time.sleep(3)
            
            if (user=='rock' and bot==1):
                print("it is a tie")
            elif(user=='rock' and bot==2):
                print("i win ^_^")
            elif(user=='rock' and bot==3):
                print("you win")
            
            
            elif(user=='paper' and bot==1):
                print("you win")
            elif(user=='paper' and bot==2):
                print("it is a tie")
            elif(user=='paper' and bot==3):
                print("i win ^_^")
            
            elif(user=='scissors' and bot==1):
                print("i win ^_^")
            elif(user=='scissors' and bot==2):
                print("you win")
            elif(user=='scissors' and bot==3):
                print("it is a tie")
            else:
                print('invalid input')
   
            contd=input('play again?')
            if (contd!= 'yes'):
                validinput= False
                break

        
main()