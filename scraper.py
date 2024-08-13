from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebdriverWait
from selenium.webdriver.support import expected_conditions as EC


class Chrome:
    def __init__(self,url,driver_path, implicit_wait) -> None:
        self._url = url
        self._driver_path = driver_path
        self._implicit_wait = implicit_wait
        self._driver = None
    def Chrome_setup(self):
        options = webdriver.ChromeOptions()
        options.add_experimental_option('detach', True)
        self._driver = webdriver.Chrome(service=Service(executable_path=self._driver_path), options=options)
        self._driver.implicit_wait(self._implicit_wait)
    
    def maximize_window(self):
        self._driver.maximize_window()

    def start_url(self):
        self._driver.get(self._url)

    def register(self, user_data):
        pass
    def _click_button(self,xpath):
        button = WebdriverWait(self._driver,10).until(
            EC.element_to_be_clickable((By.XPATH,xpath))
        )

        button.click()

    def _fill_input(self,xpath,value):
        input_field = WebdriverWait(self._driver, 10).until(
            EC.presence_of_element_located(By.XPATH,xpath)
        )
        input_field.clear()
        input_field.send_keys(value)


url = 'https://flagpedia.net/index'
links = []