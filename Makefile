gh-pages:
	git checkout master
	adocs HSO-Exercises syllabus.html
	git checkout gh-pages
	mv syllabus.html index.html
	git commit index.html -m 'Index updated from master'
	git push origin gh-pages
