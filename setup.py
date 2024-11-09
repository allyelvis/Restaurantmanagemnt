from setuptools import setup, find_packages

setup(
    name='Restaurantmanagemnt',
    version='0.1.0',
    packages=find_packages(),
    url='https://github.com/allyelvis/Restaurantmanagemnt',
    license='MIT',
    author="ALLYELVIS",
    author_email='allyelvis6569@gmail.com',
    description='A restaurant management system including point of sale and accounting features',
    install_requires=[
        'flask',  # Add other dependencies as required
        'sqlalchemy',
        'pandas',
        'numpy',
        'requests'
    ],
    classifiers=[
        'Development Status :: 3 - Alpha',  # Update to the appropriate status
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: 3.10',
    ],
    python_requires='>=3.7',
)
