/**
 * Created by Marvin on 2016/11/3.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    ScrollView
} from 'react-native';

let dataJson = require('./data.json');

let Dimensions = require('Dimensions');
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class Custom extends Component {

    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow,
            sectionHeaderHasChanged: (oldSH, newSH) => oldSH !== newSH
        });

        let newListWithSection = [];
        let sec1 = '精选菜单';
        let sec2 = '热门菜单';

        newListWithSection[sec1] = dataJson.data1;
        newListWithSection[sec2] = dataJson.data2;

        let fakeSections = [sec1, sec2];

        this.state = {
            dataSouce: ds.cloneWithRowsAndSections(newListWithSection, fakeSections)
        };
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.cellStyle}>
                <Image style={styles.imgStyle} source={{uri: rowData.img_url}}/>
            </View>
        );
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={styles.separator}/>
                <Text style={styles.textStyle}>{sectionID}</Text>
            </View>


        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListView
                        style={styles.listContainer}
                        dataSource={this.state.dataSouce}
                        renderRow={this.renderRow.bind(this)}
                        renderSectionHeader={this.renderSectionHeader.bind(this)}
                        contentContainerStyle={styles.contentStyle}/>
                </ScrollView>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    contentStyle: {
        paddingTop: 1
    },
    listContainer: {
        backgroundColor: '#F5FCFF',
        margin: 10,
        padding: 10
    },
    textStyle: {
        margin: 5
    },
    imgStyle: {
        width: width,
        height: height / 5,
        margin: 5
    },
    separator: {
        width: 4,
        backgroundColor: 'red',
        margin: 5
    },
    cellStyle: {
        backgroundColor: 'white',

    }
});
