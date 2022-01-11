def add(a,b):
    return a+b
def sub(a,b):
    return a-b
def div(a,b):
    return a/b
def mul(a,b):
    return a*b
def main():

    validinput=False
    while not validinput:
        try:
            print('welcome')
            a=int(input('first digit?'))
            b=int(input('second digit?'))
            operation=input('would you like to add,subtract,divide or multiply?')

        except:
            validinput=False
            print('invalid input')



        if (operation=='add'):
            print (add(a,b))
        elif (operation=='subtract'):
            print (sub(a,b))
        elif (operation=='divide'):
            print (div(a,b))
        elif (operation =='multiply'):
            print (mul(a,b))

        option = input('do you want to try again,yes or no?')
        if (option != 'yes'):
            break

if __name__ =='__main__':
    main()
