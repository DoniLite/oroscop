import os
import shutil
from pathlib import Path


current_directory = os.getcwd()

# Remonter de 3 dossiers en arrière
parent_directory = os.path.abspath(os.path.join(current_directory, '../../..'))
public_folder_path = os.path.join(parent_directory, 'public')
# Conceptions...
directory = Path('../')
exts = ['.svg', '.png', '.jpg', '.jpeg']
files = os.listdir(directory)
matched_files = [file for ext in exts for file in directory.glob(f'*{ext}')]


# Opérations
def cp_file_to_serve():
    if os.path.exists(public_folder_path):
        print(directory)
        for file in matched_files:
            print(file)
            dest = os.path.join(public_folder_path, file.name)
            try:
                shutil.copy(file, dest)
            except FileNotFoundError:
                print('This file or directory doesn\'t exist')
            finally:
                print('Done!')


if __name__ == '__main__':
    cp_file_to_serve()
    print(public_folder_path)
