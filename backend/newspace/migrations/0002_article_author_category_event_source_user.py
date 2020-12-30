# Generated by Django 3.1.3 on 2020-12-30 19:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('newspace', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Source',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('bias_score', models.FloatField(default=0.0)),
                ('preference', models.FloatField(default=0.0)),
                ('read_count_left', models.IntegerField(default=0)),
                ('read_count_center', models.IntegerField(default=0)),
                ('read_count_right', models.IntegerField(default=0)),
                ('agree_count_left', models.IntegerField(default=0)),
                ('agree_count_center', models.IntegerField(default=0)),
                ('agree_count_right', models.IntegerField(default=0)),
                ('disagree_count_left', models.IntegerField(default=0)),
                ('disagree_count_center', models.IntegerField(default=0)),
                ('disagree_count_right', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='publish date')),
                ('popularity_score', models.FloatField(default=0.0)),
                ('category', models.ManyToManyField(to='newspace.Category')),
            ],
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='publish_date')),
                ('view_count', models.IntegerField(default=0)),
                ('agree_count', models.IntegerField(default=0)),
                ('disagree_count', models.IntegerField(default=0)),
                ('location', models.CharField(max_length=200)),
                ('content', models.CharField(max_length=100000)),
                ('authors', models.ManyToManyField(to='newspace.Author')),
                ('event', models.ManyToManyField(to='newspace.Event')),
                ('source', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='newspace.source')),
            ],
        ),
    ]
