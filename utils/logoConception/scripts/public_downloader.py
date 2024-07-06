import os
from pathlib import Path
import shutil


public_folder = os.path.abspath(os.path.join(os.getcwd(), '../../../public'))
utils_folder = os.path.abspath(os.path.join(os.getcwd(), '../..'))
public_folder_files = os.listdir(public_folder)
PUBLIC_DATA = os.path.join(utils_folder, 'PUBLIC_DATA')

if not os.path.exists(PUBLIC_DATA):
    os.mkdir(PUBLIC_DATA)


def copy_files_and_clear():
    if os.path.exists(PUBLIC_DATA) and os.path.exists(public_folder):
        for file in public_folder_files:
            file_full_name = os.path.join(public_folder, file)
            dest_fie_full_name = os.path.join(PUBLIC_DATA, file)
            shutil.copy(file_full_name, dest_fie_full_name)
            os.remove(file_full_name)


if __name__ == '__main__':
    copy_files_and_clear()
